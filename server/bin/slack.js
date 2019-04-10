import getApp from '..';

const port = process.env.PORT || 8080;
getApp().listen(port, () => console.log(`port: ${port}`));
