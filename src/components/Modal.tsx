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
    <div className="fixed top-0 left-0 w-full h-full bg-gray-dark bg-opacity-70 z-40 flex justify-center items-center">
      {children}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2 min-w-[360px] bg-gray z-50 p-4 border border-gray-lightest">{children}</div>;
};
