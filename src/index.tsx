import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Button } from './components/Button';
import createRoutes, { articles } from './routes';

const rootRoute = {
  childRoutes: createRoutes(),
};

function RouteWithSubRoutes(route: any) {
  return (<Route
    path={route.path}
    render={(props) => {
      return <route.component {...props} {...route.props} routes={route.routes} />;
    }}
  />)
}

const MainApp = styled.div`
  padding: 50px 200px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

function buttonGenerator(route: string, title: string) {
  return { route, title };
}

const articleTopicButtons = Object.keys(articles).map((topic) => {
  return buttonGenerator(`/articles/${topic}`, topic);
});
const buttons = [buttonGenerator('/', 'Home')].concat(articleTopicButtons);

ReactDOM.render(
  <Router>
    <MainApp>
      <ButtonContainer>
        {
          buttons.map(({ route, title }, key) => {
            return (
              <Button
                key={key}
                route={route}
                title={title}
                style={{marginRight: '20px'}}
              />
            );
          })
        }
      </ButtonContainer>
      {
        rootRoute.childRoutes.map((route, i) => {
          return <RouteWithSubRoutes key={i} {...route} />;
        })
      }
    </MainApp>
  </Router>,
  document.getElementById('app')
);
