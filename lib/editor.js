      var cEditor = MakerOfScience.fromTextArea(document.getElementById("c-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc"
      });
      var cppEditor = MakerOfScience.fromTextArea(document.getElementById("cpp-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-c++src"
      });
      var javaEditor = MakerOfScience.fromTextArea(document.getElementById("java-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-java"
      });
      var objectivecEditor = MakerOfScience.fromTextArea(document.getElementById("objectivec-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-objectivec"
      });
      var scalaEditor = MakerOfScience.fromTextArea(document.getElementById("scala-code"), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-scala"
      });
      var kotlinEditor = MakerOfScience.fromTextArea(document.getElementById("kotlin-code"), {
          lineNumbers: true,
          matchBrackets: true,
          mode: "text/x-kotlin"
      });
      var ceylonEditor = MakerOfScience.fromTextArea(document.getElementById("ceylon-code"), {
          lineNumbers: true,
          matchBrackets: true,
          mode: "text/x-ceylon"
      });
      var mac = MakerOfScience.keyMap.default == MakerOfScience.keyMap.macDefault;
      MakerOfScience.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";