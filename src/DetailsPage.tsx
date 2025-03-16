import data from './data/data.json';

import {useParams} from 'react-router-dom';

const DetailsPage = () => {
    const {id} = useParams();
    const item = data.find((item) => item.id === id);

    return (
        <div className="space-y-8">
            <h1 className="text-xl font-medium text-gray-300">Details</h1>
            {item ? (
                <>
                    <p>{item.name}</p>
                    <p>{item.bio}</p>
                </>
            ) : (
                <p>Item not found</p>
            )}
        </div>
    );
};

export default DetailsPage;
