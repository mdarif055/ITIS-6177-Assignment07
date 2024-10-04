import axios from 'axios';

export const handler = async (event) => {
    try {
        // Get the input parameter from the Lambda event
        const keyword = event.keyword;

        // REST API endpoint URL
        const apiUrl = 'http://167.172.134.172:3000/api/say';
        
        //Make a request to the REST API using axios
        const response = await axios.get(apiUrl, {
            params: {
                keyword: keyword
            }
        });

        // Log the response from the REST API
        console.log('Response from API:', response.data);

        // Return the response from the REST API
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        // Log and return an error if something goes wrong
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};