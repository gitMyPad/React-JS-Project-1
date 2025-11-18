export enum AlertMessageTypes {
    default     = 'alert-primary',
    suppressed  = 'alert-secondary',
    success     = 'alert-success',
    failure     = 'alert-failure'
}

export interface AlertProps {
    message: string;
    messageType?: AlertMessageTypes;
}

function Alert({ message, messageType }: AlertProps) {
    messageType = (messageType)? messageType : AlertMessageTypes.default;

    const getClassName = (messageType: AlertMessageTypes) => {
        return 'alert ' + messageType;
    }
    return (
        <>
        <div 
            className={getClassName(messageType)}
            role='alert'
        >
            {message}
        </div>
        </>
    )
}

export default Alert