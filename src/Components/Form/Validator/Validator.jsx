import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validations = {
    checkEmpty: (title) => {
        if (!title) {
            throw new Error('Digite algo no campo!')
        }
    },
    checkMinLength: (title) => {
        if (title.length < 4) {
            throw new Error('Digite algo válido')
        }
    },
    checkMaxLength: (title) => {
        if (title.length > 30) {
            throw new Error('Limite de caracteres atingido')
        }
    },
}

function executeValidations(title) {
    Object.keys(validations).forEach((key) => {
        validations[key](title);
    });
}

export default function validate(title) {
    try {
        executeValidations(title)
        toast.success('Tarefa adicionada!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        return
    } catch (err) {
        toast.error(err.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        return err
    }
}