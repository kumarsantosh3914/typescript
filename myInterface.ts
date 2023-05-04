interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string,
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const santosh: User = {dbId: 11, email: "sa@.com", userId: 90439,
    githubToken: "github",
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name: "santosh12", off: 12) => {
        return 12;
    }
};

santosh.email = "san@.com";



