<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (product) => {
    try {
      await axios.delete(`/products/${product.id}`);
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
      setDeleteDialogOpen(false);
      console.log(`Product ${product.name} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditProduct = async (product) => {
    // Implement the logic to edit a product
  };

  const handleAddProduct = async (newProduct) => {
    // Implement the logic to add a product
  };

  return (
    <div>
      <Typography variant="h4">Manage Products</Typography>

      {/* Display the list of products */}
      {products.map((product) => (
        <div key={product.id}>
          <Typography>{product.name}</Typography>
          <Typography>{product.description}</Typography>

          {/* Delete icon */}
          <Delete onClick={() => {
            setSelectedProduct(product);
            setDeleteDialogOpen(true);
          }} />

          {/* Edit icon */}
          <Edit onClick={() => handleEditProduct(product)} />
        </div>
      ))}

      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete the product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDeleteProduct(selectedProduct)}>Delete</Button>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Add Product form */}
      {/* Implement the form to add a product */}
    </div>
  );
};

export default AdminPage;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (product) => {
    try {
      await axios.delete(`/products/${product.id}`);
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
      setDeleteDialogOpen(false);
      console.log(`Product ${product.name} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditProduct = async (product) => {
    // Implement the logic to edit a product
  };

  const handleAddProduct = async (newProduct) => {
    // Implement the logic to add a product
  };

  return (
    <div>
      <Typography variant="h4">Manage Products</Typography>

      {/* Display the list of products */}
      {products.map((product) => (
        <div key={product.id}>
          <Typography>{product.name}</Typography>
          <Typography>{product.description}</Typography>

          {/* Delete icon */}
          <Delete onClick={() => {
            setSelectedProduct(product);
            setDeleteDialogOpen(true);
          }} />

          {/* Edit icon */}
          <Edit onClick={() => handleEditProduct(product)} />
        </div>
      ))}

      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete the product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDeleteProduct(selectedProduct)}>Delete</Button>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Add Product form */}
      {/* Implement the form to add a product */}
    </div>
  );
};

export default AdminPage;
>>>>>>> f419bf8e366d09721d82aabd428583331a638b73
