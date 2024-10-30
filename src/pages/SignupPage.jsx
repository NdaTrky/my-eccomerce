import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '@/api';
import { Button } from '@/components/ui/Button';

function SignupPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm();
  const [roles, setRoles] = useState([]);
  const [isStore, setIsStore] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get('/roles');
        setRoles(response.data);
      } catch (error) {
        toast.error('Roller alınırken bir hata oluştu');
      }
    };
    fetchRoles();
  }, []);

  const handleRoleChange = (e) => {
    const selectedRole = parseInt(e.target.value, 10); // role_id'yi sayıya dönüştür
    setIsStore(selectedRole === 2); // Sadece '3' ID'li mağaza rolü seçildiğinde mağaza alanlarını göster

    // Eğer "Müşteri" rolü seçildiyse, mağaza bilgilerini sıfırla
    if (selectedRole !== 3) {
      reset({ role_id: e.target.value, 'store.name': '', 'store.phone': '', 'store.tax_no': '', 'store.bank_account': '' });
    } else {
      reset({ role_id: e.target.value }); // Sadece rolü sıfırla
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };

      if (isStore) {
        formData.store = {
          name: data['store.name'],
          phone: data['store.phone'],
          tax_no: data['store.tax_no'],
          bank_account: data['store.bank_account'],
        };
      }

      const response = await api.post('/signup', formData);
      toast.success('Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!');
      reset();
      navigate(-1);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Kayıt sırasında bir hata oluştu');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Kayıt Ol</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">İsim</label>
          <input
            type="text"
            {...register('name', {
              required: 'İsim zorunludur',
              minLength: { value: 3, message: 'İsim en az 3 karakter olmalıdır' }
            })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email zorunludur',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Geçerli bir email adresi giriniz'
              }
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Şifre</label>
          <input
            type="password"
            {...register('password', {
              required: 'Şifre zorunludur',
              minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
              validate: {
                hasNumber: value => /[0-9 ]/.test(value) || 'Şifre en az bir rakam içermelidir',
                hasUpperCase: value => /[A-Z]/.test(value) || 'Şifre en az bir büyük harf içermelidir',
                hasLowerCase: value => /[a-z]/.test(value) || 'Şifre en az bir küçük harf içermelidir',
                hasSpecialChar: value => /[!@#$%^&*]/.test(value) || 'Şifre en az bir özel karakter içermelidir',
              }
            })}
            className="w-full p-2 border rounded"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Şifre Tekrar</label>
          <input
            type="password"
            {...register('confirmPassword', {
              validate: value => value === watch('password') || 'Şifreler eşleşmiyor'
            })}
            className="w-full p-2 border rounded"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Rol</label>
          <select {...register('role_id', { required: 'Rol zorunludur' })} onChange={handleRoleChange} className="w-full p-2 border rounded">
            <option value="">Rol Seçin</option>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
          {errors.role_id && <span className="text-red-500 text-sm">{errors.role_id.message}</span>}
        </div>

        {isStore && ( // Mağaza rolü seçildiğinde bu alanlar gösterilecek
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Mağaza Adı</label>
              <input
                type="text"
                {...register('store.name', {
                  required: 'Mağaza adı zorunludur',
                  minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' }
                })}
                className="w-full p-2 border rounded"
              />
              {errors.store?.name && <span className="text-red-500 text-sm">{errors.store.name.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mağaza Telefonu</label>
              <input
                type="text"
                {...register('store.phone', {
                  required: 'Telefon zorunludur',
                  pattern: {
                    value: /^(?:\+90|0)?5\d{9}$/,
                    message: 'Geçerli bir telefon numarası giriniz'
                  }
                })}
                className="w-full p-2 border rounded"
              />
              {errors.store?.phone && <span className="text-red-500 text-sm">{errors.store.phone.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Vergi Numarası</label>
              <input
                type="text"
                {...register('store.tax_no', {
                  required: 'Vergi numarası zorunludur',
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: 'Geçerli bir vergi numarası giriniz (TXXXXVXXXXXX)'
                  }
                })}
                className="w-full p-2 border rounded"
              />
              {errors.store?.tax_no && <span className="text-red-500 text-sm">{errors.store.tax_no.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Banka Hesap Numarası</label>
              <input
                type="text"
                {...register('store.bank_account', {
                  required: 'Banka hesap numarası zorunludur',
                  pattern: {
                    value: /^TR\d{2}[0-9]{5}[0-9]{1,21}$/,
                    message: 'Geçerli bir IBAN giriniz'
                  }
                })}
                className="w-full p-2 border rounded"
              />
              {errors.store?.bank_account && <span className="text-red-500 text-sm">{errors.store.bank_account.message}</span>}
            </div>
          </>
        )}

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
          variant="secondary"
          size="sm"
        >
          {isSubmitting ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
        </Button>
      </form>
    </div>
  );
}

export default SignupPage;