import { toast } from 'react-hot-toast';

const ErrorToast = (message) => {
    return toast.error(message);
};

export default ErrorToast;
