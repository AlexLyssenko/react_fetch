import { Link} from 'react-router-dom';
import data from './data/data.json';

export type DataType = Item[];

export interface Item {
    name: string;
    language: string;
    id: string;
    bio: string;
    version: number;
}

const HomePage = () => {
    const items: DataType = data;
    return (
        <div className="space-y-8">
            <h1 className="text-xl font-medium text-gray-300">Examples</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={`${item.id}_${index}`}>
                        <Link to={`/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
