const Body = ({ children }: { children: string }) => {
  return (
    <div className='flex justify-center items-center'>
      <p className='text-center w-1/2 min-w-64 mt-6'>{children}</p>
    </div>
  );
};

export default Body;
