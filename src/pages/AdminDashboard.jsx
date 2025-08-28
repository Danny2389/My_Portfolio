import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Table, Button, Badge, Form, Alert, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { getContactSubmissions, getWebsiteVisits, deleteContactSubmission, deleteWebsiteVisit } from '../lib/supabase';

const AdminDashboard = () => {
  const { adminId } = useParams();
  const navigate = useNavigate();
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [websiteVisits, setWebsiteVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterDate, setFilterDate] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    // Check admin session
    const adminSession = Cookies.get('admin_session');
    if (!adminSession) {
      navigate(`/admin-${adminId}`);
      return;
    }

    const session = JSON.parse(adminSession);
    if (session.adminId !== adminId) {
      navigate(`/admin-${adminId}`);
      return;
    }

    loadData();
  }, [adminId, navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [contactResult, visitsResult] = await Promise.all([
        getContactSubmissions(),
        getWebsiteVisits()
      ]);

      if (contactResult.success) {
        setContactSubmissions(contactResult.data);
      }
      if (visitsResult.success) {
        setWebsiteVisits(visitsResult.data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    Cookies.remove('admin_session');
    navigate(`/admin-${adminId}`);
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      let result;
      if (deleteItem.type === 'contact') {
        result = await deleteContactSubmission(deleteItem.id);
      } else {
        result = await deleteWebsiteVisit(deleteItem.id);
      }

      if (result.success) {
        loadData(); // Reload data
        setShowDeleteModal(false);
        setDeleteItem(null);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const exportToCSV = (data, filename) => {
    const csvContent = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).map(val => `"${val}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredContacts = contactSubmissions
    .filter(contact => !filterDate || contact.created_at.includes(filterDate))
    .sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  const filteredVisits = websiteVisits
    .filter(visit => !filterDate || visit.created_at.includes(filterDate))
    .sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(to left, rgb(5, 8, 40), rgb(1, 4, 39))', minHeight: '100vh' }}>
      <Container fluid className="py-4">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white"
              >
                🎛️ Admin Dashboard
              </motion.h1>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Col>
        </Row>

        {/* Navigation Tabs */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex gap-2">
              {['overview', 'contacts', 'visits'].map(tab => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'primary' : 'outline-primary'}
                  onClick={() => setActiveTab(tab)}
                  className="text-capitalize"
                >
                  {tab}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <Row>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="bg-dark text-white border-primary mb-3">
                  <Card.Body>
                    <Card.Title>📧 Contact Submissions</Card.Title>
                    <h2 className="text-primary">{contactSubmissions.length}</h2>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-dark text-white border-success mb-3">
                  <Card.Body>
                    <Card.Title>👥 Website Visits</Card.Title>
                    <h2 className="text-success">{websiteVisits.length}</h2>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-dark text-white border-warning mb-3">
                  <Card.Body>
                    <Card.Title>🌐 Unique IPs</Card.Title>
                    <h2 className="text-warning">
                      {new Set(websiteVisits.map(v => v.ip_address)).size}
                    </h2>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="bg-dark text-white"
                />
              </Col>
              <Col md={6} className="text-end">
                <Button
                  variant="success"
                  onClick={() => exportToCSV(filteredContacts, 'contact_submissions')}
                  className="me-2"
                >
                  📊 Export CSV
                </Button>
              </Col>
            </Row>

            <Card className="bg-dark text-white">
              <Card.Body>
                <Table responsive variant="dark" striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>IP Address</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map(contact => (
                      <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.company_name}</td>
                        <td>{contact.contact_info}</td>
                        <td>
                          <Badge bg="info">{contact.ip_address}</Badge>
                        </td>
                        <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => {
                              setDeleteItem({ id: contact.id, type: 'contact' });
                              setShowDeleteModal(true);
                            }}
                          >
                            🗑️
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </motion.div>
        )}

        {/* Visits Tab */}
        {activeTab === 'visits' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="bg-dark text-white"
                />
              </Col>
              <Col md={6} className="text-end">
                <Button
                  variant="success"
                  onClick={() => exportToCSV(filteredVisits, 'website_visits')}
                >
                  📊 Export CSV
                </Button>
              </Col>
            </Row>

            <Card className="bg-dark text-white">
              <Card.Body>
                <Table responsive variant="dark" striped>
                  <thead>
                    <tr>
                      <th>IP Address</th>
                      <th>Page URL</th>
                      <th>Username</th>
                      <th>User Agent</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVisits.map(visit => (
                      <tr key={visit.id}>
                        <td>
                          <Badge bg="info">{visit.ip_address}</Badge>
                        </td>
                        <td>{visit.page_url}</td>
                        <td>{visit.username || 'Anonymous'}</td>
                        <td className="text-truncate" style={{ maxWidth: '200px' }}>
                          {visit.user_agent}
                        </td>
                        <td>{new Date(visit.created_at).toLocaleDateString()}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => {
                              setDeleteItem({ id: visit.id, type: 'visit' });
                              setShowDeleteModal(true);
                            }}
                          >
                            🗑️
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </motion.div>
        )}

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            Are you sure you want to delete this item? This action cannot be undone.
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default AdminDashboard;