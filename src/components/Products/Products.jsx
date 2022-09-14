import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQRVSUQfIxY0b9eW8xCyIVC77rvk_SDBB-rv_RFTNrXSWmVD1kIIgterYycqq1YuTaVZDGtUi2PbPkyuUdXebgf3LOh1lHPyeu-AamrZmKa&usqp=CAE' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=90&.v=1633033424000' },
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );

};

export default Products;