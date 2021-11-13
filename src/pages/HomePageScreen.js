import classes from './HomePageScreen.module.css';
import { useState } from 'react';

function HomePageScreen() {
  const [widgetCount, setWidget] = useState(0);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.widgetcontainer}>
        <div>Widget count is {widgetCount}</div>
        <div className={classes.inputcontainer}>
          <div onClick={() => setWidget(widgetCount + 1)}>Add Widget</div>
          <div onClick ={() => setWidget(widgetCount - 1)}>Delete Widget</div>
        </div>
      </div>
    </div>
  );
}

export default HomePageScreen;