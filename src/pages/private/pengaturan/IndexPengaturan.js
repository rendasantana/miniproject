import React from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import Toko from './Toko';
import Pengguna from './Pengguna';


const IndexPengaturan = () => {
    return(
        <Switch>
          <Route path="/pengaturan/pengguna"    component={Pengguna}/>
          <Route path="/pengaturan/toko"        component={Toko}/>
          <Redirect to="/pengaturan/pengguna"/>
        </Switch>        
      
    )
}

export default IndexPengaturan;
