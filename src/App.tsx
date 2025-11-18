import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert, { AlertMessageTypes } from './components/Alert';
import { useState } from "react";

function App() {
  const items                         = [
    'Coyle', 'Gooseberry', 'Franco',
    'Otto', 'Arora', 'Cici'
  ];
  const [alertState, setAlertState]   = useState({
    flag: false,
    message: "",
    type: AlertMessageTypes.default
  })

  const getAlert = (alert: {
    flag: boolean;
    message: string;
    type: AlertMessageTypes;
  }) => {
    if (alertState.flag)
      return <Alert message={alert.message} messageType={alert.type}/>;
    return null;
  };

  // items = [];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Prime Asset List:"
        noItemFlavorText="Somebody find Clyde! We've got rats to hunt"
        onSelectItem={(item, state) => {
          if (!state) {
            setAlertState({
              flag: true,
              message: "The neo-capitalist pigs have betrayed us! Eat the rich!",
              type: AlertMessageTypes.failure
            });
            return;
          }
          if (item.content !== 'Cici') {
            setAlertState({
              flag: true,
              message: "Prime Asset selected: " + item.content,
              type: AlertMessageTypes.success
            });
          }
          else {
            setAlertState({
              flag: true,
              message: "What is Cici doing in Outlast Trials?",
              type: AlertMessageTypes.default
            });
          }
        }}
      >
      </ListGroup>
      {getAlert(alertState)}
    </div>
  );
}

export default App;