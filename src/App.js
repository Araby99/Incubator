import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import Nav from './Nav';
import Home from './Home';
import Intern from './Intern';
import Error from './Error';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Intern">
                    <Intern />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}
export default App