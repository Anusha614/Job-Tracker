import react,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {Input, Button} from '../../index'
import {useNavigate, Link} from 'react-router-dom'
import authService from '../../../../MegaBlog/Appwrite/Auth'
import {useDispatch} from 'react-redux'

export default function SignUpForm () {

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm ()
    const dispatch = useDispatch()
    

    const handleSignup = async(data) => {

        setError('')

        try {

            const userData = await authService.createAccount(data)

            if (userData) {
               const currentUser = await authService.getCurrentUser()

               if (currentUser) {dispatch(login(currentUser))
               {/*navigate('/')*/}
               alert('You successfully signed up!')
               }
            }
        } catch (error) {
            setError(error.message)
            alert(error.message)
        }    
    }

    return (
        < form onSubmit = {handleSubmit(handleSignup)}>
            <Input 
            {...register('name', {required: true})}
            placeholder = "Enter your name" />
            <Input
            {...register('email', {required: true, 
                 validate: {
                            matchPattern: (value) => 
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                "Email address must be a valid address",
                            
                        }
            })}
            placeholder = 'Enter your Email' />
            <Input 
            {...register('password', {required: true})}
            placeholder = 'Create a Passoword' />

            <Button type = 'submit'>Sign Up</Button>
        </form>

    )
}