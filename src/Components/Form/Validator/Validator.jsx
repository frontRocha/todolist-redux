import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Validator(title) {
    if (!title) {
        toast.error('Verifique os campos', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        throw new Error('empty field')
    }

    if (title.length < 4) {
        toast.error('Adicione uma tarefa válida', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        throw new Error('invalid field')
    }

    if (title.length > 30) {
        toast.error('Limite de caracteres', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        throw new Error('character limit')
    }

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
}