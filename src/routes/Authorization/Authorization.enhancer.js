import { compose } from 'redux';
import { lifecycle } from 'recompose';
import axios from 'axios';
import qs from 'qs';
import { routePaths } from 'appConstants/paths';

export default compose(
  lifecycle({
    async componentDidMount() {
      const { history } = this.props;
      const { data } = await axios.get('/api/auth/checkSpotifyAuth');
      let authCode;

      switch (true) {
        case window.location.search.includes('?code='):
          authCode = qs.parse(window.location.search.slice(1)).code;
          await axios.get(`/api/login/${authCode}`);
          history.push(routePaths.base);
          break;
        case data.auth:
          return history.push(routePaths.base);
        case !data.auth:
          window.location.replace(data.url);
          break;
        default:
          break;
      }
      return null;
    },
  }),
);
