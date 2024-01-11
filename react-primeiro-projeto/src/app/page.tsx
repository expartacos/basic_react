import { GeoForms } from '@/componets/GeoForms';
import { Person } from '@/componets/Person';


const Page = () => {
  return (
    <div>
      <h1 className="fonte-bold text-yellow-600">Olá Mundo</h1>
      <h2>1% cada dia</h2>

      <GeoForms/>
      <Person/>
    </div>
  );
}

export default Page;