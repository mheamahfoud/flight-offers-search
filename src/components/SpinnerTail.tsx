
const SpinnerFlight = () => {
    return (
        <div className="flex items-center justify-center fixed left-1/2 top-/1/2 translate-x-[-50%] translate-y-[50%] gap-4  ">


            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-secondary border-r-4 border-b-4 border-l-8 border-opacity-25">
                <div className="h-4 w-4  bg-secondary rounded-full"></div>
            </div>
            <div className="ml-4 text-primary text-xl font-semibold">البحث عن رحلات .....</div> 
        </div>
    );
};

export default SpinnerFlight;
