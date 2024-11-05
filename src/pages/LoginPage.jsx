// src/pages/LoginPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from "../actions/userActions.js"; // Giriş işlemi için thunk action
import { useNavigate } from 'react-router-dom'; // useNavigate'i içe aktar
import { Button } from '@/components/ui/Button.jsx';

function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // yönlendirme için useNavigate'i kullan

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(loginUser(data));
      if (response.success) {
        if (data.rememberMe) {
          localStorage.setItem('token', response.token);
        }
        // Sadece bir kez dispatch yapın
        navigate(-1);
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <span className="text-red-500 text-sm">Email alanı zorunludur.</span>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Şifre:</label>
          <input
            type="password"
            {...register('password', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.password && <span className="text-red-500 text-sm">Şifre alanı zorunludur.</span>}
        </div>
        <div>
          <label className='flex gap-2'>
            <input type="checkbox" {...register('rememberMe')} />
            Beni Hatırla
          </label>
        </div>
        <Button
          variant="secondary"
          size="sm"
          type="submit" 
          disabled={isSubmitting}
          className="px-5 py-5"
        

        >
          {isSubmitting ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
          
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;