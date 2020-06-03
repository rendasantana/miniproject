import React from 'react';
import { Route, Switch} from "react-router-dom";
import IndexPengaturan from './pengaturan/IndexPengaturan';
import IndexProduct from './product/IndexProduct';
import IndexTransaksi from './transaksi/IndexTransaksi';
import IndexHome from './home/IndexHome';



const IndexPrivate = () => {
    return(
        <Switch>
          <Route path="/pengaturan" exact component={IndexPengaturan}/>
          <Route path="/product" exact component={IndexProduct}/>
          <Route path="/transaksi" component={IndexTransaksi}/>
          <Route component={IndexHome}/>
        </Switch>        
      
    )
}

export default IndexPrivate;
