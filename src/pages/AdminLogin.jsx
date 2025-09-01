import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { verifyAdminUrl, adminLogin } from '../lib/supabase';
import Cookies from 'js-cookie';

const AdminLogin = () => {
  const { adminId } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validUrl, setValidUrl] = useState(true); // Default to true to avoid initial blocking

  useEffect(() => {
    // Check if already logged in
    const adminSession = Cookies.get('admin_session');
    if (adminSession) {
      try {
        const session = JSON.parse(adminSession);
        if (session.adminId === adminId) {
          navigate(`/admin-${adminId}/dashboard`);
          return;
        }
      } catch (e) {
        // Invalid session, continue with login
        Cookies.remove('admin_session');
      }
    }

    // For demo purposes, set default values
    setUsername('portfolio_admin');
    setValidUrl(true);
  }, [adminId, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // For demo purposes, simple password check
    if (password === 'admin123') {
      // Set admin session cookie
      Cookies.set('admin_session', JSON.stringify({
        username: username,
        adminId: adminId,
        loginTime: new Date().toISOString()
      }), { expires: 1 }); // 1 day expiry
      
      navigate(`/admin-${adminId}/dashboard`);
    } else {
      setError('Invalid password');
    }
    
    setLoading(false);
  };

  if (!validUrl) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Alert variant="danger">
          <h4>Access Denied</h4>
          <p>Invalid admin URL. Please check your credentials.</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid style={{ minHeight: '100vh', background: 'linear-gradient(to left, rgb(5, 8, 40), rgb(1, 4, 39))' }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6} lg={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark p-4 rounded shadow-lg"
            style={{ border: '2px solid #7500fa' }}
          >
            <div className="text-center mb-4">
              <h2 className="text-white">🔐 Admin Access</h2>
              <p className="text-muted">Secure Portal Login</p>
            </div>

            {error && (
              <Alert variant="danger" className="mb-3">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  readOnly
                  className="bg-secondary text-white"
                  style={{ border: '1px solid #7500fa' }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  className="bg-dark text-white"
                  style={{ border: '1px solid #7500fa' }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                disabled={loading}
                style={{
                  background: '#7500fa',
                  border: 'none',
                  padding: '12px'
                }}
              >
                {loading ? 'Authenticating...' : 'Access Dashboard'}
              </Button>
            </Form>

            <div className="text-center mt-3">
              <small className="text-muted">
                🛡️ Secure Admin Portal - Authorized Access Only
              </small>
              <br />
              <small className="text-info mt-2 d-block">
                Demo Password: admin123
              </small>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;