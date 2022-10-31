import { Portal } from 'components/Portal';

export const Modal = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  if (!isVisible) return null;

  return (
    <Portal>
      <Backdrop>
        <Content>{children}</Content>
      </Backdrop>
    </Portal>
  );
};

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex justify-center items-center">
      {children}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-slate-800 z-50 p-4 rounded-md">{children}</div>;
};
