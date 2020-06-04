import React from 'react';
import { Route, Switch } from "react-router-dom";
import EditProduct from './EditProduct';
import GridProduct from './GridProduct';


const IndexProduct = () => {
    return(
        <Switch>
          <Route path="/product/edit/:productId" exact component={EditProduct}/>
          <Route component={GridProduct}/>
        </Switch>           
    )
}

export default IndexProduct;
