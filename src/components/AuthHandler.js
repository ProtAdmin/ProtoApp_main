import { useEffect } from "react";

const AuthHandler = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.includes("id_token")) {
            const params = new URLSearchParams(hash.replace("#", "?"));
            const idToken = params.get("id_token");

            if (idToken) {
                document.cookie = `id_token=${idToken}; path=/; Secure; SameSite=None`;
                console.log("✅ ID Token saved in Cookie:", idToken);
            } else {
                console.log("❌ ID Token not found in URL hash.");
            }

            // URL をクリーンアップ
            window.history.replaceState({}, document.title, window.location.pathname);
        } else {
            console.log("❌ URL does not contain id_token.");
        }
    }, []);

    return null;
};

export default AuthHandler;
