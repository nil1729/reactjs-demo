import React, {useContext} from 'react'
import AlertContext from '../../context/alerts/alertContext';



const Alert = () => {

    const alertContext = useContext(AlertContext);
    const {alerts} = alertContext;


  return (
      <div className="container">
        {
            alerts.length>0 && alerts.map(alert => (
                <div key={alert.id} className={`alert alert-${alert.type} position-absolute mt-2`} role="alert">
                    {alert.msg}
                </div>
            ))
        }
      </div>
  )
}

export default Alert
