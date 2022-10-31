import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Modal } from 'components/Modal';

import { Portfolio } from 'schema';

type Props = {
  addPortfolio: (data: Portfolio) => Promise<void>;
};

export const AddPortfolio = ({ addPortfolio }: Props) => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Portfolio>();

  const onSubmit = async (data: Portfolio) => {
    await addPortfolio(data);
    setShow(false);
    reset();
  };

  const handleClose = () => {
    setShow(false);
    reset();
  };

  return (
    <>
      <button type="button" className="button" onClick={() => setShow(true)}>
        Adicionar Ativo
      </button>
      <div>
        <Modal isVisible={show}>
          <h3>Adicionar Ativo</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-1 space-x-2">
              <label htmlFor="ticket">Ticket</label>
              <input
                id="ticket"
                className="input"
                {...register('ticket', { required: true })}
                placeholder="ex: XPLG11"
              />
              {errors.ticket && <span>Campo Obrigatório</span>}
            </div>
            <div className="py-1 space-x-2">
              <label htmlFor="cotas">Cotas</label>
              <input
                id="cotas"
                type="number"
                className="input"
                {...register('cotas', { required: true })}
                placeholder="ex: 1"
              />
              {errors.cotas && <span>Campo Obrigatório</span>}
            </div>
            <div className="py-1 space-x-2">
              <label htmlFor="cotacaoAtual">Cotacao Atual</label>
              <input
                id="cotacaoAtual"
                className="input"
                type="number"
                {...register('cotacaoAtual', { required: true })}
                placeholder="ex: 100.00"
              />
              {errors.cotacaoAtual && <span>Campo Obrigatório</span>}
            </div>
            <div className="pt-1 space-x-2">
              <button type="button" className="button" onClick={handleClose}>
                Cancelar
              </button>
              <button type="submit" className="button">
                Adicionar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
