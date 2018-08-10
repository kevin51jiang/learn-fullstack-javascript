const ENV = process.env;

export const nodeEnv = ENV.nodeEnv || 'during dev';


export const logStars = function (message) {
    console.info('***********************');
    console.info(message);
    console.info('***********************');
}

export default {
    port: ENV.port || 8080,
    host: ENV.host || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
}; 