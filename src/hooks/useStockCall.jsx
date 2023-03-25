
const useStockCall = () => {
  return (
    const Firms = () => {
        const { token } = useSelector((state) => state.auth);
  ;
        
        const getFirms = async () => {
          const BASE_URL = "https://12147.fullstack.clarusway.com/";
      
         
          const { data } = await axios(`${BASE_URL}stock/firms`, {
            headers: { Authorization: `Token ${token}` },
          });
        };
    
        )
        return { getStockData}
    }

export default useStockCall