const Body = ({ children }: { children: string }) => {
  return (
    <div className='flex justify-center items-center'>
      <p className='text-center w-1/2 mt-8'>{children}</p>
    </div>
  );
};

export default Body;
