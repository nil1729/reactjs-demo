import React, {  useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
        if(alertContext.alert !== null){
            return (
                        <div className="alert alert-danger" role="alert">
                            {`${alertContext.alert.msg}`}
                        </div>
                )
            }else{
                return (
                    <></>
                )
            }
}

export default Alert
