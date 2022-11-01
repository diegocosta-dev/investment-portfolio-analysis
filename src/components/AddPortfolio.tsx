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
      <button type="button" className="bg-purple p-2 hover:bg-opacity-50 transition-all ease-in-out uppercase text-stone w-full" onClick={() => setShow(true)}>
        Adicionar Ativo
      </button>
      <div>
        <Modal isVisible={show}>
          <h2>Adicionar Ativo</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
              <label htmlFor="ticket">Ticket</label>
              <input
                id="ticket"
                {...register('ticket', { required: true })}
                placeholder="ex: XPLG11"
              />
              {errors.ticket && <span>Campo Obrigatório</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cotas">Cotas</label>
              <input
                id="cotas"
                type="number"
                {...register('cotas', { required: true })}
                placeholder="ex: 1"
              />
              {errors.cotas && <span>Campo Obrigatório</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cotacaoAtual">Cotacao Atual</label>
              <input
                id="cotacaoAtual"
                type="number"
                {...register('cotacaoAtual', { required: true })}
                placeholder="ex: 100.00"
              />
              {errors.cotacaoAtual && <span>Campo Obrigatório</span>}
            </div>
            <div className="flex gap-3 justify-center items-center pt-2">
              <button type="button" className="bg-gold w-full p-2 hover:bg-opacity-50 transition-all ease-in-out uppercase text-stone" onClick={handleClose}>
                Cancelar
              </button>
              <button type="submit" className="bg-purple w-full p-2 hover:bg-opacity-50 transition-all ease-in-out uppercase text-stone">
                Adicionar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
