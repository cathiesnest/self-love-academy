/* =========================================================
   SELF LOVE ACADEMY
   Powered by CathiesNest Digital
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     LINKS
     ======================================================= */

  const TABING_GUHIT_URL =
    "https://cathiesnest.github.io/tabing-guhit-3.0/";

  const ALISON_WELLBEING_URL =
    "https://alison.com/psychometric-test/wellbeing?utm_source=alison_user&utm_medium=affiliate&utm_campaign=42404117";

  const SELF_LOVE_ACADEMY_URL =
    "https://cathiesnest.github.io/self-love-academy/";


  /* =======================================================
     FIVE REFLECTION QUESTIONS
     ======================================================= */

  const questions = [

    {
      question:
        "When you say “yes” to something you don't really have the energy for, what are you afraid might happen if you said “no”?",

      options: [
        "They might be disappointed.",
        "They might think I'm selfish.",
        "I don't want conflict.",
        "I'm afraid they'll stop needing me.",
        "Honestly, I'm not sure."
      ],

      reflections: [
        "It's easy to protect other people's feelings while forgetting to check in with your own.",
        "Being kind doesn't mean you have to say yes to everything.",
        "Avoiding conflict can sometimes mean carrying more than you actually need to.",
        "Being needed by others doesn't have to come at the cost of being there for yourself.",
        "Not knowing is okay. Sometimes awareness begins simply by noticing the question."
      ]
    },

    {
      question:
        "If a friend made the same mistake you're currently blaming yourself for, what would you say to them?",

      options: [
        "I'd tell them everyone makes mistakes.",
        "I'd remind them that one mistake doesn't define them.",
        "I'd tell them to learn from it and keep going.",
        "I'd probably comfort them.",
        "I'm much harder on myself than I am on others."
      ],

      reflections: [
        "You already understand that mistakes are part of being human. You deserve that same understanding too.",
        "One moment cannot tell the whole story of who someone is — including you.",
        "Growth doesn't require perfection. Sometimes it simply requires the courage to continue.",
        "You know how to offer kindness. Maybe some of that kindness belongs to you, too.",
        "That realization alone can be powerful: the voice you use with yourself matters."
      ]
    },

    {
      question:
        "When you finally have free time, do you allow yourself to rest — or do you immediately look for something you should be doing?",

      options: [
        "I rest without guilt.",
        "I rest, but feel guilty.",
        "I usually find another task.",
        "I don't really know how to rest.",
        "It depends on the day."
      ],

      reflections: [
        "You seem to recognize that rest is part of a healthy rhythm, not something you have to earn.",
        "You may be discovering that rest can be valuable even when nothing has been checked off a list.",
        "Always staying busy can make stillness feel uncomfortable. You are allowed to pause.",
        "Learning how to rest is still learning. You don't have to master it overnight.",
        "Some days ask more from us than others. Listening to that difference is a form of self-awareness."
      ]
    },

    {
      question:
        "When you compare your life to someone else's, what are you usually forgetting about their story?",

      options: [
        "I don't know what they struggled through.",
        "I only see what they choose to show.",
        "Their timeline isn't mine.",
        "I forget how far I've come.",
        "I've never thought about this before."
      ],

      reflections: [
        "Every visible success has an invisible story behind it.",
        "What we see is rarely the whole picture. Comparison often leaves out everything happening behind the scenes.",
        "Your life does not need to follow someone else's calendar.",
        "Looking backward can remind you that you've already survived and grown through things you once thought you couldn't.",
        "Sometimes the first step away from comparison is simply realizing we were comparing incomplete stories."
      ]
    },

    {
      question:
        "If you stopped worrying about disappointing other people, what is one small change you would make for yourself?",

      options: [
        "I'd finally make time for myself.",
        "I'd set a boundary.",
        "I'd try something I've been putting off.",
        "I'd choose what actually makes me happy.",
        "I'm still figuring that out."
      ],

      reflections: [
        "Making space for yourself isn't selfish. You are part of the life you're responsible for caring for.",
        "A boundary isn't necessarily a rejection of someone else. Sometimes it's a way of respecting yourself.",
        "There may be a small part of your life waiting for permission to begin.",
        "Your happiness deserves consideration too — not only everyone else's expectations.",
        "You don't have to know the whole answer today. Sometimes the question itself opens the door."
      ]
    }

  ];


  /* =======================================================
     INSPIRATION MESSAGES
     ======================================================= */

  const inspirationMessages = [

    "With hardship comes ease. Keep your faith stronger than fear. Good days are coming.",

    "You don't have to have everything figured out. You only need enough courage for the next small step.",

    "Rest is not falling behind. Sometimes slowing down is how we find our way forward.",

    "Your worth was never measured by how much you could do for everyone else.",

    "You are allowed to outgrow the version of yourself that existed only to survive.",

    "Starting again does not erase how far you've already come.",

    "Be gentle with yourself. You are still becoming.",

    "Some seasons are for building. Some are for healing. Both are part of growth.",

    "You don't need permission to take care of yourself.",

    "Your next chapter does not have to look like anyone else's."

  ];


  /* =======================================================
     STATE
     ======================================================= */

  let currentQuestion = 0;

  const answers = [];

  let lastInspirationIndex = -1;


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const questionCard =
    document.getElementById("questionCard");

  const questionText =
    document.getElementById("questionText");

  const answerOptions =
    document.getElementById("answerOptions");

  const questionCounter =
    document.getElementById("questionCounter");

  const progressPercent =
    document.getElementById("progressPercent");

  const progressBar =
    document.getElementById("progressBar");

  const tinyReflection =
    document.getElementById("tinyReflection");

  const nextQuestion =
    document.getElementById("nextQuestion");

  const reflectionResult =
    document.getElementById("reflectionResult");

  const personalReflection =
    document.getElementById("personalReflection");

  const smallStep =
    document.getElementById("smallStep");

  const inspirationText =
    document.getElementById("inspirationText");

  const inspirationAuthor =
    document.querySelector(".inspiration-author");

  const newInspiration =
    document.getElementById("newInspiration");

  const shareButton =
    document.getElementById("shareButton");

  const shareModal =
    document.getElementById("shareModal");

  const closeShareModal =
    document.getElementById("closeShareModal");

  const modalDone =
    document.getElementById("modalDone");


  /* =======================================================
     WORKPLACE WELLBEING — DO NOT CHANGE
     ======================================================= */

  const wellbeingButton =
    document.getElementById("wellbeingButton");

  const tabingGuhitButton =
    document.getElementById("tabingGuhitButton");


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle =
    document.getElementById("menuToggle");

  const navLinks =
    document.getElementById("navLinks");


  /* =======================================================
     THEME BUTTONS
     ======================================================= */

  const themeOptions =
    document.querySelectorAll(".theme-button");


  /* =======================================================
     GOOGLE ANALYTICS
     ======================================================= */

  function trackEvent(eventName, parameters = {}) {

    if (typeof window.gtag === "function") {

      window.gtag(
        "event",
        eventName,
        parameters
      );

    }

  }


  /* =======================================================
     THEME SWITCHER
     ======================================================= */

  function applyTheme(theme) {

    const selectedTheme =
      theme === "mocha"
        ? "mocha"
        : "sage";

    document.documentElement.dataset.theme =
      selectedTheme;

    document.body.dataset.theme =
      selectedTheme;

    themeOptions.forEach(function (option) {

      const optionTheme =
        option.dataset.theme;

      const isActive =
        optionTheme === selectedTheme;

      option.classList.toggle(
        "active",
        isActive
      );

      option.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });

    try {

      localStorage.setItem(
        "selfLoveAcademyTheme",
        selectedTheme
      );

    } catch (error) {

      /* Theme still works without localStorage. */

    }

  }


  function loadSavedTheme() {

    let savedTheme = "sage";

    try {

      const storedTheme =
        localStorage.getItem(
          "selfLoveAcademyTheme"
        );

      if (
        storedTheme === "sage" ||
        storedTheme === "mocha"
      ) {

        savedTheme =
          storedTheme;

      }

    } catch (error) {

      savedTheme = "sage";

    }

    applyTheme(savedTheme);

  }


  themeOptions.forEach(function (option) {

    option.addEventListener(
      "click",
      function () {

        const selectedTheme =
          option.dataset.theme;

        if (
          selectedTheme === "sage" ||
          selectedTheme === "mocha"
        ) {

          applyTheme(
            selectedTheme
          );

          trackEvent(
            "theme_changed",
            {
              theme: selectedTheme
            }
          );

        }

      }
    );

  });


  /* =======================================================
     START REFLECTION
     ======================================================= */

  const startButton =
    document.querySelector(
      '.primary-button[href="#reflection"]'
    );

  if (startButton) {

    startButton.addEventListener(
      "click",
      function () {

        trackEvent(
          "self_reflection_started"
        );

      }
    );

  }


  /* =======================================================
     LOAD QUESTION
     ======================================================= */

  function loadQuestion() {

    const item =
      questions[currentQuestion];

    if (!item) {
      return;
    }


    /* =====================================================
       QUESTION COUNTER
       ===================================================== */

    if (questionCounter) {

      questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    /* =====================================================
       PROGRESS PERCENT
       ===================================================== */

    if (progressPercent) {

      const percentage =
        Math.round(
          ((currentQuestion + 1) /
            questions.length) *
          100
        );

      progressPercent.textContent =
        `${percentage}%`;

    }


    /* =====================================================
       PROGRESS BAR
       ===================================================== */

    if (progressBar) {

      progressBar.style.width =
        `${((currentQuestion + 1) /
          questions.length) *
          100}%`;

    }


    /* =====================================================
       QUESTION TEXT
       ===================================================== */

    if (questionText) {

      questionText.textContent =
        item.question;

    }


    /* =====================================================
       ANSWER OPTIONS
       ===================================================== */

    if (answerOptions) {

      answerOptions.innerHTML = "";

      item.options.forEach(
        function (optionText, index) {

          const button =
            document.createElement("button");

          button.type = "button";

          button.className =
            "answer-option";

          button.setAttribute(
            "aria-label",
            optionText
          );

          button.setAttribute(
            "aria-pressed",
            "false"
          );

          button.style.cursor =
            "pointer";


          /* -----------------------------------------------
             OPTION DOT
             ----------------------------------------------- */

          const dot =
            document.createElement("span");

          dot.className =
            "option-dot";


          /* -----------------------------------------------
             OPTION TEXT
             ----------------------------------------------- */

          const text =
            document.createElement("span");

          text.textContent =
            optionText;


          /* -----------------------------------------------
             BUILD BUTTON
             ----------------------------------------------- */

          button.appendChild(dot);

          button.appendChild(text);


          /* -----------------------------------------------
             CLICK EVENT
             ----------------------------------------------- */

          button.addEventListener(
            "click",
            function (event) {

              event.preventDefault();

              event.stopPropagation();

              selectAnswer(
                index,
                button
              );

            }
          );


          answerOptions.appendChild(
            button
          );

        }
      );

    }


    /* =====================================================
       RESTORE PREVIOUS ANSWER
       ===================================================== */

    const savedAnswer =
      answers[currentQuestion];

    if (
      typeof savedAnswer === "number" &&
      answerOptions
    ) {

      const buttons =
        answerOptions.querySelectorAll(
          ".answer-option"
        );

      const selectedButton =
        buttons[savedAnswer];

      if (selectedButton) {

        selectedButton.classList.add(
          "selected"
        );

        selectedButton.setAttribute(
          "aria-pressed",
          "true"
        );

        if (tinyReflection) {

          tinyReflection.textContent =
            item.reflections[savedAnswer];

          tinyReflection.classList.add(
            "visible"
          );

        }

      }

    } else {

      if (tinyReflection) {

        tinyReflection.textContent =
          "";

        tinyReflection.classList.remove(
          "visible"
        );

      }

    }


    /* =====================================================
       NEXT BUTTON
       ===================================================== */

    if (nextQuestion) {

      nextQuestion.disabled =
        answers[currentQuestion] === undefined;

      nextQuestion.textContent =
        currentQuestion ===
        questions.length - 1
          ? "See My Reflection →"
          : "Next Question →";

    }

  }


  /* =======================================================
     SELECT ANSWER
     ======================================================= */

  function selectAnswer(
    answerIndex,
    selectedButton
  ) {

    if (
      !answerOptions ||
      !selectedButton
    ) {

      return;

    }


    /* =====================================================
       CLEAR OTHER SELECTIONS
       ===================================================== */

    const buttons =
      answerOptions.querySelectorAll(
        ".answer-option"
      );

    buttons.forEach(
      function (button) {

        button.classList.remove(
          "selected"
        );

        button.setAttribute(
          "aria-pressed",
          "false"
        );

      }
    );


    /* =====================================================
       SELECT CURRENT ANSWER
       ===================================================== */

    selectedButton.classList.add(
      "selected"
    );

    selectedButton.setAttribute(
      "aria-pressed",
      "true"
    );


    /* =====================================================
       SAVE ANSWER
       ===================================================== */

    answers[currentQuestion] =
      answerIndex;


    /* =====================================================
       SHOW MINI REFLECTION
       ===================================================== */

    if (tinyReflection) {

      tinyReflection.textContent =
        questions[currentQuestion]
          .reflections[answerIndex];

      tinyReflection.classList.add(
        "visible"
      );

    }


    /* =====================================================
       ENABLE NEXT BUTTON
       ===================================================== */

    if (nextQuestion) {

      nextQuestion.disabled =
        false;

    }


    /* =====================================================
       GOOGLE ANALYTICS
       ===================================================== */

    trackEvent(
      `question_${currentQuestion + 1}_answered`,
      {
        question_number:
          currentQuestion + 1,

        answer_number:
          answerIndex + 1
      }
    );

  }


  /* =======================================================
     NEXT QUESTION
     ======================================================= */

  if (nextQuestion) {

    nextQuestion.addEventListener(
      "click",
      function (event) {

        event.preventDefault();


        /* -----------------------------------------------
           Safety check
           ----------------------------------------------- */

        if (
          answers[currentQuestion] ===
          undefined
        ) {

          return;

        }


        /* -----------------------------------------------
           Go to next question
           ----------------------------------------------- */

        if (
          currentQuestion <
          questions.length - 1
        ) {

          currentQuestion++;

          loadQuestion();


          if (questionCard) {

            questionCard.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          }

        } else {

          finishReflection();

        }

      }
    );

  }


  /* =======================================================
     FINISH REFLECTION
     ======================================================= */

  function finishReflection() {

    trackEvent(
      "self_reflection_completed"
    );

    generatePersonalReflection();

    generateSmallStep();

    generateInspiration();


    if (reflectionResult) {

      reflectionResult.hidden =
        false;

      reflectionResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }


  /* =======================================================
     PERSONAL REFLECTION
     ======================================================= */

  function generatePersonalReflection() {

    if (!personalReflection) {
      return;
    }


    const selectedAnswers =
      answers.map(
        function (answer, index) {

          if (
            answer === undefined
          ) {

            return "";

          }

          return questions[index]
            .options[answer];

        }
      );


    let message =
      "Your answers show that you are willing to pause and look at yourself with honesty. ";


    const boundary =
      selectedAnswers[0] || "";

    const selfTalk =
      selectedAnswers[1] || "";

    const rest =
      selectedAnswers[2] || "";

    const comparison =
      selectedAnswers[3] || "";

    const nextChapter =
      selectedAnswers[4] || "";


    /* =====================================================
       BOUNDARIES
       ===================================================== */

    if (
      boundary.includes("disappointed") ||
      boundary.includes("selfish") ||
      boundary.includes("conflict") ||
      boundary.includes("needed")
    ) {

      message +=
        "You may sometimes carry the weight of other people's expectations. ";

    }


    /* =====================================================
       SELF TALK
       ===================================================== */

    if (
      selfTalk.includes("harder on myself") ||
      selfTalk.includes("mistake")
    ) {

      message +=
        "You also recognize that the way you speak to yourself deserves kindness and attention. ";

    }


    /* =====================================================
       REST
       ===================================================== */

    if (
      rest.includes("guilty") ||
      rest.includes("task") ||
      rest.includes("don't really know")
    ) {

      message +=
        "Rest may be something you are still learning to give yourself without needing to justify it. ";

    }


    /* =====================================================
       COMPARISON
       ===================================================== */

    if (
      comparison.includes("timeline") ||
      comparison.includes("far I've come")
    ) {

      message +=
        "There is also a reminder here that your journey has its own timing. ";

    }


    /* =====================================================
       NEXT CHAPTER
       ===================================================== */

    if (
      nextChapter.includes("myself") ||
      nextChapter.includes("boundary") ||
      nextChapter.includes("happy")
    ) {

      message +=
        "Perhaps your next chapter is asking you to make a little more room for what you need, not only what others expect from you. ";

    }


    /* =====================================================
       CLOSING
       ===================================================== */

    message +=
      "You don't need to change everything at once. Meaningful growth can begin with one honest realization and one small step.";


    personalReflection.textContent =
      message;

  }


  /* =======================================================
     SMALL STEP
     ======================================================= */

  function generateSmallStep() {

    if (!smallStep) {
      return;
    }


    const selectedAnswer =
      answers[4];


    const steps = [

      "Before saying yes to your next request, give yourself permission to say, “Let me think about it first.”",

      "When you catch yourself being harsh with yourself today, pause and ask: “Would I say this to someone I love?”",

      "Give yourself 15 minutes of guilt-free rest today. No productivity required.",

      "When comparison appears, remind yourself: “I am looking at their chapter, not their whole story.”",

      "Write down one small thing you would like to do for yourself — and take the first tiny step toward it."

    ];


    const stepIndex =
      typeof selectedAnswer === "number"
        ? selectedAnswer
        : 0;


    smallStep.textContent =
      steps[stepIndex];

  }


  /* =======================================================
     RANDOM INSPIRATION
     ======================================================= */

  function generateInspiration() {

    if (!inspirationText) {
      return;
    }


    let randomIndex;


    do {

      randomIndex =
        Math.floor(
          Math.random() *
          inspirationMessages.length
        );

    } while (
      randomIndex ===
      lastInspirationIndex
    );


    lastInspirationIndex =
      randomIndex;


    inspirationText.textContent =
      `“${inspirationMessages[randomIndex]}”`;


    if (inspirationAuthor) {

      inspirationAuthor.textContent =
        "— CathiesNest Digital";

    }


    trackEvent(
      "inspiration_generated"
    );

  }


  /* =======================================================
     GIVE ME ANOTHER
     ======================================================= */

  if (newInspiration) {

    newInspiration.addEventListener(
      "click",
      function () {

        generateInspiration();

      }
    );

  }


  /* =======================================================
     WORKPLACE WELLBEING
     DO NOT TOUCH
     ======================================================= */

  if (wellbeingButton) {

    wellbeingButton.addEventListener(
      "click",
      function () {

        trackEvent(
          "wellbeing_checkin_click"
        );

        window.open(
          ALISON_WELLBEING_URL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* =======================================================
     TABING GUHIT / YOUR NEXT CHAPTER
     ======================================================= */

  if (tabingGuhitButton) {

    tabingGuhitButton.addEventListener(
      "click",
      function () {

        trackEvent(
          "tabing_guhit_click"
        );

        window.open(
          TABING_GUHIT_URL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* =======================================================
     CARE & SHARE
     ======================================================= */

  async function copyAcademyLink() {

    const link =
      SELF_LOVE_ACADEMY_URL;

    let copiedSuccessfully =
      false;


    /* =====================================================
       MODERN CLIPBOARD API
       ===================================================== */

    try {

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        await navigator.clipboard.writeText(
          link
        );

        copiedSuccessfully =
          true;

      } else {

        /* =================================================
           FALLBACK COPY METHOD
           ================================================= */

        const fallbackInput =
          document.createElement("textarea");

        fallbackInput.value =
          link;

        fallbackInput.setAttribute(
          "readonly",
          ""
        );

        fallbackInput.style.position =
          "fixed";

        fallbackInput.style.left =
          "-9999px";

        fallbackInput.style.top =
          "0";

        fallbackInput.style.opacity =
          "0";

        document.body.appendChild(
          fallbackInput
        );

        fallbackInput.focus();

        fallbackInput.select();

        fallbackInput.setSelectionRange(
          0,
          fallbackInput.value.length
        );

        copiedSuccessfully =
          document.execCommand("copy");

        fallbackInput.remove();

      }

    } catch (error) {

      console.error(
        "Unable to copy Self Love Academy link:",
        error
      );

    }


    /* =====================================================
       COPY SUCCESS
       ===================================================== */

    if (copiedSuccessfully) {

      trackEvent(
        "share_link_clicked"
      );


      if (shareModal) {

        shareModal.hidden =
          false;

        document.body.classList.add(
          "modal-open"
        );

      }

    } else {

      alert(
        "The link could not be copied automatically. Please copy the Self Love Academy page address from your browser."
      );

    }

  }


  if (shareButton) {

    shareButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        copyAcademyLink();

      }
    );

  }


  /* =======================================================
     CLOSE SHARE CONFIRMATION
     ======================================================= */

  function closeShareConfirmation() {

    if (shareModal) {

      shareModal.hidden =
        true;

      document.body.classList.remove(
        "modal-open"
      );

    }

  }


  if (closeShareModal) {

    closeShareModal.addEventListener(
      "click",
      closeShareConfirmation
    );

  }


  if (modalDone) {

    modalDone.addEventListener(
      "click",
      closeShareConfirmation
    );

  }


  /* =======================================================
     CLOSE MODAL BY CLICKING OUTSIDE
     ======================================================= */

  if (shareModal) {

    shareModal.addEventListener(
      "click",
      function (event) {

        if (
          event.target ===
          shareModal
        ) {

          closeShareConfirmation();

        }

      }
    );

  }


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape"
      ) {

        closeShareConfirmation();

      }

    }
  );


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  if (
    menuToggle &&
    navLinks
  ) {

    menuToggle.addEventListener(
      "click",
      function () {

        navLinks.classList.toggle(
          "open"
        );


        const isOpen =
          navLinks.classList.contains(
            "open"
          );


        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

      }
    );


    navLinks
      .querySelectorAll("a")
      .forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

              navLinks.classList.remove(
                "open"
              );

              menuToggle.setAttribute(
                "aria-expanded",
                "false"
              );

            }
          );

        }
      );

  }


  /* =======================================================
     INITIALIZE THE PAGE
     ======================================================= */

  loadSavedTheme();

  loadQuestion();


  /* =======================================================
     PAGE VIEW
     ======================================================= */

  trackEvent(
    "self_love_academy_view"
  );

});
