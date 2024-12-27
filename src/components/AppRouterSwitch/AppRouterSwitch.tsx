import { Switch, Route } from 'react-router-dom';
import { Welcome } from '../Welcome';
import { Home } from '../Home';
import { Sentence } from '../Sentence';
import { NotFound } from '../NotFound';
import { Author } from '../Author';
import { BookMizantrop } from '../BookMizantrop';
import { BookMultiverse } from '../BookMultiverse';
import { BookUazdao } from '../BookUazdao';

export const AppRouterSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/welcome" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/sentence" component={Sentence} />
      <Route path="/author" component={Author} />
      <Route path="/book-uazdao" component={BookUazdao} />
      <Route path="/book-multiverse" component={BookMultiverse} />
      <Route path="/book-mizantrop" component={BookMizantrop} />
      <Route component={NotFound} />
    </Switch>
  );
};
