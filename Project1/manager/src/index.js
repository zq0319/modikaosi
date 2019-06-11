import dva from 'dva';
<<<<<<< HEAD
import 'antd/dist/antd.css';
import './index.css';
=======
import './index.css';
import "antd/dist/antd.css";

>>>>>>> dingmeng
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
<<<<<<< HEAD
app.model(require('./models/user').default);
=======
// app.model(require('./models/example').default);
>>>>>>> dingmeng

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
