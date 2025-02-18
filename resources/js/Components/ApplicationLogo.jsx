export default function ApplicationLogo(props) {
    return (
        <img 
            src="/img/store.webp" 
            alt="My Store Logo" 
            className="w-40 h-auto mx-auto rounded-full shadow-lg border-4 border-gradient-to-r from-yellow-400 to-red-500 p-2" 
            {...props} 
        />
    );
}
