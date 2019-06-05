import React from 'react';
import Gallery from './components/gallery';
import Photos from './components/photos';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {

    render(){
        return ( // создание роутинга с переходом на другие страницы
            <BrowserRouter>
                <Route path='/gallery' component={Gallery} />
                <Route path='/album' component={Photos} />
            </BrowserRouter>
        )
   }
}

export default App;
