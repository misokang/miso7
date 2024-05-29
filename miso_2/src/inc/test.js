
import { useParams } from 'react-router-dom';


function Detail() {
        const { data } = useParams(); // URL의 data 파라미터 값 가져오기
      
        return (
          <div>
            <h1>Detail Page</h1>
            <p>Data: {data}</p>
          </div>
        );
      }
    
      
      export default Detail;