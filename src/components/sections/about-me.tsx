import picture from "../../assets/picture.webp";
import { Box } from "../ui/box";
import { HighlightedText } from "../ui/higlighted-text";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-zinc-100 dark:bg-zinc-700 transition-colors h-full z-10"
    >
      <div className="flex flex-col-reverse p-4 py-8 sm:px-0 gap-4 m-auto sm:container h-full sm:flex-row animate-fade-in-down sm:animate-fade-in-left animate-duration-700 animate-delay-700">
        <div className="flex flex-col gap-4 ml-auto">
          <h1 className="text-5xl font-semibold sm:text-6xl text-lime-600 text-center sm:text-right w-full">
            About Me
          </h1>
          <div className="flex flex-col gap-2">
            <p className="sm:text-lg text-zinc-800 dark:text-zinc-100 w-full sm:text-right transition-colors">
              <HighlightedText>23 years old</HighlightedText> Software Developer
              based in{" "}
              <HighlightedText>
                Bahía Blanca, Buenos Aires, Argentina
              </HighlightedText>
              .
            </p>
            <p className="sm:text-lg text-zinc-800 dark:text-zinc-100 w-full sm:text-right transition-colors">
              Recently got my{" "}
              <HighlightedText>
                Bachelor's Degree in Computer Science
              </HighlightedText>{" "}
              at Universidad Nacional del Sur.
            </p>
            <p className="sm:text-lg text-zinc-800 dark:text-zinc-100 w-full sm:text-right transition-colors">
              Native <HighlightedText>Spanish</HighlightedText> speaker and C1
              level-certified in the <HighlightedText>English</HighlightedText>{" "}
              language.
            </p>
            <p className="sm:text-lg text-zinc-800 dark:text-zinc-100 w-full sm:text-right transition-colors">
              Here are some of the{" "}
              <HighlightedText>technologies</HighlightedText> I've used the most
              for personal projects and college tasks.
            </p>
          </div>
          <div className="flex flex-row flex-wrap sm:justify-end gap-2 pt-2">
            <Box>
              <svg
                className="text-lime-600 fill-current stroke-current"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>Java</title>
                <path d="M12.557 23.22c0 0-0.982 0.571 0.699 0.765 2.037 0.232 3.079 0.199 5.324-0.226 0 0 0.59 0.37 1.415 0.691-5.033 2.157-11.39-0.125-7.437-1.23zM11.942 20.405c0 0-1.102 0.816 0.581 0.99 2.176 0.224 3.895 0.243 6.869-0.33 0 0 0.411 0.417 1.058 0.645-6.085 1.779-12.863 0.14-8.508-1.305zM17.127 15.63c1.24 1.428-0.326 2.713-0.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zM23.783 25.302c0 0 0.727 0.599-0.801 1.062-2.905 0.88-12.091 1.146-14.643 0.035-0.917-0.399 0.803-0.953 1.344-1.069 0.564-0.122 0.887-0.1 0.887-0.1-1.020-0.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-0.749 16.044-1.95zM13.029 17.489c0 0-4.673 1.11-1.655 1.513 1.274 0.171 3.814 0.132 6.181-0.066 1.934-0.163 3.876-0.51 3.876-0.51s-0.682 0.292-1.175 0.629c-4.745 1.248-13.911 0.667-11.272-0.609 2.232-1.079 4.046-0.956 4.046-0.956zM21.412 22.174c4.824-2.506 2.593-4.915 1.037-4.591-0.382 0.079-0.552 0.148-0.552 0.148s0.142-0.222 0.412-0.318c3.079-1.083 5.448 3.193-0.994 4.887-0 0 0.075-0.067 0.097-0.126zM18.503 3.337c0 0 2.671 2.672-2.534 6.781-4.174 3.296-0.952 5.176-0.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zM13.503 28.966c4.63 0.296 11.74-0.164 11.908-2.355 0 0-0.324 0.831-3.826 1.49-3.952 0.744-8.826 0.657-11.716 0.18 0 0 0.592 0.49 3.635 0.685z" />
              </svg>
            </Box>
            <Box>
              <svg
                className="text-lime-600 fill-current stroke-current dark:stroke-none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>React</title>
                <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z" />
                <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z" />
              </svg>
            </Box>
            <Box>
              <svg
                className="text-lime-600 fill-current stroke-current stroke-1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>Laravel</title>
                <path d="M27.226 15.777c-0.15-0.168-2.221-2.761-2.586-3.201s-0.543-0.36-0.767-0.328c-0.225 0.033-2.845 0.473-3.149 0.524s-0.496 0.173-0.309 0.435c0.166 0.233 1.889 2.675 2.269 3.213l-6.849 1.641-5.447-9.107c-0.217-0.322-0.262-0.434-0.755-0.411s-4.273 0.336-4.542 0.359c-0.269 0.023-0.565 0.142-0.295 0.778s4.562 9.885 4.681 10.154 0.431 0.706 1.159 0.531c0.746-0.179 3.334-0.855 4.748-1.225 0.747 1.353 2.271 4.097 2.553 4.491 0.376 0.525 0.635 0.438 1.213 0.263 0.451-0.137 7.056-2.512 7.354-2.634s0.481-0.21 0.28-0.508c-0.148-0.219-1.89-2.553-2.803-3.774 0.625-0.166 2.848-0.758 3.085-0.822 0.276-0.075 0.314-0.21 0.164-0.379zM14.774 18.323c-0.082 0.017-3.918 0.936-4.123 0.982s-0.205 0.023-0.228-0.047-4.561-9.427-4.624-9.544-0.060-0.21 0-0.21c0.060 0 3.623-0.319 3.749-0.325s0.113 0.020 0.159 0.1c0 0 5.026 8.675 5.114 8.827s0.035 0.199-0.047 0.216zM25.59 20.35c0.061 0.096 0.122 0.157-0.070 0.227s-6.493 2.196-6.615 2.249c-0.122 0.053-0.219 0.070-0.376-0.158s-2.207-3.775-2.207-3.775l6.678-1.738c0.166-0.052 0.219-0.087 0.324 0.079s2.205 3.019 2.266 3.115zM26.018 15.609c-0.15 0.033-2.602 0.641-2.602 0.641l-2.006-2.752c-0.056-0.079-0.103-0.159 0.037-0.178s2.419-0.431 2.522-0.454c0.103-0.023 0.192-0.051 0.318 0.122s1.861 2.368 1.926 2.452-0.047 0.136-0.197 0.168z" />
              </svg>
            </Box>
            <Box>
              <svg
                className="text-lime-600 fill-current"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>HTML</title>
                <path d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z" />
              </svg>
            </Box>
            <Box>
              <svg
                className="text-lime-600 fill-current"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>CSS</title>
                <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z" />
              </svg>
            </Box>
            <Box>
              <svg
                className="text-lime-600 fill-current"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>JavaScript</title>
                <path d="M0.384 0.67v31.296h31.296v-31.296h-31.296zM16.718 27.442c-0.461 0.937-1.342 1.553-2.362 1.85-1.568 0.36-3.067 0.155-4.183-0.515-0.747-0.458-1.33-1.163-1.725-1.975 0.794-0.485 1.586-0.973 2.38-1.458 0.021 0.009 0.083 0.122 0.167 0.268 0.303 0.509 0.565 0.869 1.080 1.121 0.506 0.172 1.615 0.283 2.044-0.607 0.262-0.452 0.178-1.936 0.178-3.545 0-2.529 0.012-5.016 0.012-7.576h2.927c0 2.688 0.015 5.383 0 8.067 0.006 1.645 0.149 3.14-0.518 4.369zM28.862 26.615c-1.017 3.481-6.691 3.594-8.957 1.294-0.479-0.541-0.779-0.824-1.065-1.449 1.205-0.693 1.205-0.693 2.377-1.371 0.637 0.979 1.226 1.517 2.285 1.737 1.437 0.175 2.883-0.318 2.559-1.844-0.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-0.744-5.834 0.494-0.622 1.336-1.086 2.219-1.309 0.306-0.039 0.616-0.080 0.922-0.119 1.77-0.036 2.877 0.431 3.689 1.339 0.226 0.229 0.41 0.476 0.756 1.012-0.943 0.601-0.94 0.595-2.291 1.47-0.289-0.622-0.767-1.012-1.273-1.181-0.785-0.238-1.776 0.021-1.981 0.851-0.071 0.256-0.056 0.494 0.057 0.916 0.318 0.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745 0.22 1.229-0.054 2.026-0.095 2.145z" />
              </svg>
            </Box>
            <Box>
              <svg
                className="text-lime-600 fill-current"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
              >
                <title>Unity</title>
                <path d="M22.307 5.376c-1.226 0.312-3.254 0.802-4.502 1.137l-2.295 0.579-0.669 1.181-0.668 1.204h-2.786l-6.686 6.686 6.686 6.686h2.741l0.691 1.204c0.379 0.669 0.847 1.27 1.070 1.337 0.379 0.111 3.254 0.892 7.087 1.916 0.958 0.245 1.76 0.424 1.783 0.401 0.044-0.044 0.379-1.226 0.758-2.63s0.936-3.454 1.226-4.547l0.535-1.961-0.646-1.115c-0.357-0.602-0.646-1.181-0.646-1.292s0.29-0.713 0.669-1.315l0.646-1.114-0.468-1.627c-0.914-3.253-1.738-5.906-2.006-6.574l-0.29-0.669-2.229 0.513zM21.259 8.362c-0.044 0.089-0.913 1.649-1.961 3.432l-1.894 3.254h-3.989c-2.206 0-3.945-0.044-3.9-0.111 0.067-0.045 1.204-1.248 2.496-2.652 2.006-2.139 2.541-2.563 3.232-2.697 0.446-0.067 1.828-0.424 3.053-0.758 2.451-0.669 3.075-0.758 2.964-0.468zM23.733 10.19c0.111 0.401 0.535 1.916 0.936 3.365l0.713 2.652-0.624 2.251c-0.334 1.248-0.758 2.808-0.936 3.454-0.178 0.668-0.423 1.114-0.512 1.003-0.089-0.089-1.003-1.605-2.006-3.365-1.226-2.14-1.783-3.298-1.671-3.566 0.267-0.735 3.566-6.486 3.722-6.508 0.067 0 0.245 0.334 0.379 0.713zM18.362 19.059c2.362 3.967 3.008 5.148 2.897 5.237-0.044 0.044-1.604-0.312-3.454-0.78l-3.365-0.891-2.429-2.474c-1.315-1.36-2.452-2.563-2.474-2.674-0.045-0.134 1.449-0.178 3.878-0.156l3.967 0.067 0.981 1.671z" />
              </svg>
            </Box>
          </div>
        </div>
        <img
          className="sm:h-[18rem] rounded-md border-zinc-400 dark:border-zinc-800 border shadow-xl transition-colors"
          src={picture}
          alt="Selfie"
          title="Selfie"
        />
      </div>
    </section>
  );
};
