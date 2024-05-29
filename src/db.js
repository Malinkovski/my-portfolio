


const section2title = "About Me";
const section3Title = "Projects";
const section4Title = "test";
const section5Title = "Get in Touch";

const about = {
  paragraph:
    "Hey there! I’m all about making cool stuff happen on websites. Love crafting code that’s slick, user-friendly, and totally on point. Always on the lookout for new tech to play with and ways to level up my skills.",
};
const skillsBar = [
  {
    name: "HTML5",
    svg: "M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z",
    viewBox: "0 0 512 512",
  },
  {
    name: "CSS3",
    svg: "M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302   H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606   l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062   l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z",
    viewBox: "0 0 512 512",
  },
  {
    name: "Javascript",
    svg: "M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z",
    viewBox: "0 0 16 16",
  },
  {
    name: "SASS",
    svg: "m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z",
    viewBox: "0 -4 32 32",
  },
  {
    name: "Node",
    svg: "M115.889,151.885l-24.053-13.773c-1.512-0.891-2.451-2.499-2.451-4.244v-29.306c0-1.745-0.928-3.364-2.443-4.232l-10.239-5.899c-0.742-0.444-1.601-0.662-2.432-0.662c-0.854,0-1.689,0.218-2.451,0.662l-10.246,5.899c-1.516,0.869-2.44,2.488-2.44,4.232v29.306c0,1.745-0.928,3.342-2.446,4.244l-24.061,13.773c-0.747,0.458-1.675,0.458-2.429,0c-0.766-0.421-1.22-1.234-1.22-2.107l-0.089-62.733c0-1.759,0.938-3.375,2.447-4.247L71.819,59.5c0.695-0.403,1.46-0.61,2.232-0.643c0.06,0,0.352,0,0.422,0c0.776,0.033,1.541,0.24,2.229,0.643l40.48,23.299c1.52,0.873,2.443,2.488,2.443,4.247l-0.078,62.733c0,0.873-0.469,1.686-1.216,2.107C117.586,152.344,116.643,152.344,115.889,151.885z M271.617,135.07V88.317c0-1.748,0.932-3.36,2.443-4.232l40.503-23.373c1.508-0.873,3.371-0.876,4.887-0.004l10.136,5.844c0.532,0.307,1.187,0.307,1.715,0c0.525-0.307,0.854-0.872,0.854-1.482V2.943c0-0.869,0.459-1.667,1.205-2.11c0.751-0.437,1.675-0.444,2.433-0.022l24.098,13.448c1.552,0.861,2.51,2.499,2.51,4.27V135.07c0,1.749-0.932,3.36-2.447,4.236l-40.502,23.388c-1.512,0.88-3.379,0.88-4.895,0l-40.495-23.388C272.549,138.43,271.617,136.818,271.617,135.07z M301.781,119.711c0,0.436,0.232,0.839,0.609,1.057l13.906,8.014c0.377,0.214,0.843,0.214,1.22,0l13.906-8.014c0.377-0.218,0.609-0.621,0.609-1.057v-16.058c0-0.436-0.232-0.843-0.609-1.057l-13.902-8.033c-0.381-0.218-0.847-0.218-1.228,0l-13.906,8.033c-0.373,0.214-0.605,0.621-0.605,1.057V119.711z M480.675,83.449l-40.235-23.365c-1.513-0.88-3.383-0.883-4.898-0.004l-40.487,23.369c-1.512,0.873-2.443,2.488-2.443,4.236v46.738c0,1.759,0.946,3.378,2.47,4.251l40.232,22.921c1.481,0.851,3.304,0.854,4.794,0.03L464.44,148.1c0.772-0.433,1.253-1.242,1.257-2.122c0.007-0.88-0.462-1.697-1.228-2.137l-40.738-23.384c-0.758-0.436-1.228-1.246-1.228-2.122v-14.645c0-0.873,0.466-1.682,1.224-2.122l12.679-7.312c0.754-0.433,1.686-0.433,2.439,0l12.687,7.312c0.758,0.44,1.224,1.25,1.224,2.122v11.525c0,0.873,0.469,1.682,1.227,2.118c0.758,0.433,1.689,0.433,2.447-0.004l24.245-14.095c1.512-0.876,2.437-2.487,2.437-4.232V87.678C483.111,85.933,482.187,84.321,480.675,83.449z M152.783,138.441l40.48,23.387c1.516,0.873,3.378,0.873,4.894,0l40.495-23.387c1.512-0.876,2.443-2.488,2.443-4.236V87.434c0-1.745-0.932-3.364-2.447-4.236l-40.491-23.365c-1.516-0.876-3.378-0.876-4.891,0l-40.483,23.365c-1.516,0.873-2.447,2.492-2.447,4.236v46.771C150.336,135.954,151.268,137.565,152.783,138.441z M393.945,246.323l-124.834-72.14c-7.833-4.465-18.338-4.465-26.237,0l-124.838,72.14c-8.088,4.658-13.093,13.396-13.093,22.755v144.073c0,9.353,5.005,18.102,13.093,22.767l32.732,18.856c15.861,7.807,21.547,7.807,28.759,7.807c23.477,0,36.968-14.202,36.968-38.969V281.373c0-2.012-1.641-3.597-3.618-3.597h-15.832c-2.011,0-3.626,1.585-3.626,3.597v142.239c0,10.979-11.363,21.905-29.916,12.639l-34.199-19.769c-1.205-0.654-1.971-1.948-1.971-3.331V269.078c0-1.367,0.766-2.728,1.978-3.423l124.764-72.015c1.156-0.673,2.694-0.673,3.844,0l124.79,71.996c1.193,0.714,1.937,2.029,1.937,3.441v144.073c0,1.383-0.743,2.706-1.907,3.371l-124.841,72.06c-1.068,0.65-2.706,0.65-3.867,0l-32.022-19.015c-0.953-0.547-2.173-0.754-3.098-0.229c-8.864,5.031-10.542,5.692-18.845,8.576c-2.055,0.717-5.09,1.948,1.128,5.419l41.682,24.663c3.992,2.313,8.535,3.504,13.093,3.504c4.624,0,9.152-1.19,13.145-3.504l124.834-72.078c8.084-4.705,13.114-13.414,13.114-22.767V269.078C407.06,259.719,402.029,250.999,393.945,246.323zM299.448,399.408c-37.253,0-45.448-9.359-48.194-27.886c-0.318-1.978-2.012-3.453-4.044-3.453h-18.202c-2.255,0-4.065,1.804-4.065,4.07c0,23.705,12.904,51.983,74.506,51.983c44.605,0,70.182-17.559,70.182-48.231c0-30.415-20.553-38.503-63.809-44.232c-43.719-5.785-48.161-8.768-48.161-19.007c0-8.436,3.763-19.717,36.144-19.717c28.918,0,39.578,6.231,43.962,25.716c0.385,1.837,2.056,3.176,3.948,3.176h18.271c1.135,0,2.211-0.488,2.979-1.294c0.772-0.854,1.183-1.967,1.075-3.135c-2.827-33.579-25.143-49.226-70.236-49.226c-40.14,0-64.078,16.94-64.078,45.333c0,30.813,23.819,39.334,62.333,43.134c46.092,4.525,49.67,11.256,49.67,20.327C341.729,392.703,329.105,399.408,299.448,399.408zM438.328,101.044c-0.288-0.17-0.646-0.17-0.935,0l-7.767,4.484c-0.292,0.167-0.47,0.477-0.47,0.81v8.979c0,0.333,0.178,0.644,0.47,0.81l7.767,4.484c0.288,0.167,0.646,0.167,0.935,0l7.773-4.484c0.293-0.166,0.47-0.477,0.47-0.81v-8.979c0-0.333-0.177-0.643-0.47-0.81L438.328,101.044z",
    viewBox: "0 0 512 512",
  },
  {
    name: "Typescript",
    svg: "M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z",
    viewBox: "0 0 16 16",
  },
  {
    name: "Git",
    svg: "M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "React",
    svg: "M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z",
    viewBox: "0 0 32 32",
  },
  {
    name: "NextJS",
    svg: "M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "Jquery",
    svg: "M22.88,10.41a5,5,0,0,1-6.43-7.66L17,2.37A5,5,0,0,0,23.34,10l-.46.44M21.1,14.5A7.5,7.5,0,0,1,11.46,3l.92-.64a7.5,7.5,0,0,0,9.53,11.36l-.81.78M20,19.38A10.5,10.5,0,1,1,6.47,3.29L7.58,2.5A10.49,10.49,0,0,0,21,18.43Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "Bootstrap",
    svg: "M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z",
    viewBox: "0 0 24 24",
  },

  {
    name: "Npmjs",
    svg: "M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm-3 4H7v10h5V9.5h2.5V17H17V7z",
    viewBox: "0 0 24 24",
  },

];
const projects = [
  {

    id: "project1",
    name: "Igralishte.mk",
    skills: ["TS, JSONServer, Next"],
    url: "https://github.com//Malinkovski/project03",
  },
  {

    id: "project2",
    name: "Marinov - (Hackathon)",
    skills: ["Vite, SCSS, TS"],
    url: "https://github.com/boriskuz/hackathon-marinov",
  },
  {

    id: "project3",
    name: "Street Artists",
    skills: ["HTML, SCSS, JS"],
    url: "https://github.com/Malinkovski/Artists",
  },
  {

    id: "project4",
    name: "Other Projects",
    skills: ["HTML, SCSS, TS/JS , React"],
    url: "https://github.com/Malinkovski/challenges",
  },
  {

    id: "project5",
    name: "Brainster Labs",
    skills: ["HTML, CSS, JS, Bootstrap"],
    url: "https://github.com/Malinkovski/brif",
  },
];

const contact = {
  pitch:
    "Feel free to reach out through any of my social media channels. I'm available and attentive to messages, whether is relate to development, professional inquiries, or collaborative opportunities. Looking forward to connecting with you!",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};

const social = {
  github: "https://github.com/Malinkovski",
  linkedin: "https://www.linkedin.com/in/ilija-malinkovski-190395236/",
  resume: "https://azure-babb-59.tiiny.site",
};
export {
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};