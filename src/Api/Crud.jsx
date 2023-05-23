import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getUsuarios = async () => {
    try {
      const response = await api.get('/usuarios/todos');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      throw error;
    }
  };
  
  export const createUsuario = async (usuario) => {
    try {
      const response = await api.post('/usuarios/inserir', usuario);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  };
  
  export const deleteUsuario = async (id) => {
    try {
      const response = await api.delete(`/usuarios/deletar/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      throw error;
    }
  };
  