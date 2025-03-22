const formatPageName = (pageName) => {
    switch (pageName) {
        case "/":
            return "home";
        default:
            return pageName.replace(/\s+/g, "-").toLowerCase();
    }
};

export default formatPageName;