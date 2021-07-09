<template>
    <nav
        id="navbar"
        ref="navbar"
        class="navbar navbar-expand-lg navbar-light bg-transparent sticky-top"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Another action</a
                                >
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Something else here</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link disabled"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                            >Disabled</a
                        >
                    </li>
                </ul>
                <form class="d-flex">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",

    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                this.$refs.navbar.classList.remove("bg-transparent");
                this.$refs.navbar.classList.add("bg-primary");
                this.$refs.navbar.classList.remove("navbar-light");
                this.$refs.navbar.classList.add("navbar-dark");
                this.$refs.navbar.classList.add("shadow");
            } else {
                this.$refs.navbar.classList.remove("bg-primary");
                this.$refs.navbar.classList.add("bg-transparent");
                this.$refs.navbar.classList.remove("navbar-dark");
                this.$refs.navbar.classList.add("navbar-light");
                this.$refs.navbar.classList.remove("shadow");
            }
        },
    },
};
</script>


<style lang="scss" scoped>
#navbar {
    transition: all 0.5s ease-in-out;
}
</style>