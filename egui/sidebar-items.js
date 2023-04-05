window.SIDEBAR_ITEMS = {"constant":[["NUM_POINTER_BUTTONS","Number of pointer buttons supported by egui, i.e. the number of possible states of [`PointerButton`]."]],"enum":[["Align","left/center/right or top/center/bottom alignment for e.g. anchors and layouts."],["CursorIcon","A mouse cursor icon."],["Direction","Layout direction, one of `LeftToRight`, `RightToLeft`, `TopDown`, `BottomUp`."],["Event","An input event generated by the integration."],["FontFamily","Font of unknown size."],["ImageData","An image stored in RAM."],["Key","Keyboard keys."],["PointerButton","Mouse button (or similar for touch input)"],["Shape","A paint primitive such as a circle or a piece of text. Coordinates are all screen space points (not physical pixels)."],["TextureFilter","How the texture texels are filtered."],["TextureId","What texture to use in a [`Mesh`] mesh."],["TouchPhase","In what phase a touch event is in."],["WidgetType","The different types of built-in widgets in egui"]],"fn":[["__run_test_ctx","For use in tests; especially doctests."],["__run_test_ui","For use in tests; especially doctests."],["accesskit_root_id",""],["lerp","Linear interpolation."],["pos2","`pos2(x, y) == Pos2::new(x, y)`"],["remap","Linearly remap a value from one range to another, so that when `x == from.start()` returns `to.start()` and when `x == from.end()` returns `to.end()`."],["remap_clamp","Like [`remap`], but also clamps the value so that the returned value is always in the `to` range."],["vec2","`vec2(x, y) == Vec2::new(x, y)`"],["warn_if_debug_build","Helper function that adds a label when compiling with debug assertions enabled."]],"macro":[["egui_assert","An assert that is only active when `egui` is compiled with the `extra_asserts` feature or with the `extra_debug_asserts` feature in debug builds."],["github_link_file","Create a `Hyperlink` to the current [`file!()`] on github."],["github_link_file_line","Create a `Hyperlink` to the current [`file!()`] (and line) on Github"],["trace","Show debug info on hover when [`Context::set_debug_on_hover`] has been turned on."]],"mod":[["containers","Containers are pieces of the UI which wraps other pieces of UI. Examples: [`Window`], [`ScrollArea`], [`Resize`], [`SidePanel`], etc."],["gui_zoom","Helpers for zooming the whole GUI of an app (changing [`Context::pixels_per_point`]."],["introspection","Showing UI:s for egui/epaint types."],["layers","Handles paint layers, i.e. how things are sometimes painted behind or in front of other things."],["menu","Menu bar functionality (very basic so far)."],["mutex","Helper module that wraps some Mutex types with different implementations."],["os",""],["output","All the data egui returns to the backend at the end of each frame."],["special_emojis","The default egui fonts supports around 1216 emojis in total. Here are some of the most useful: ∞⊗⎗⎘⎙⏏⏴⏵⏶⏷ ⏩⏪⏭⏮⏸⏹⏺■▶📾🔀🔁🔃 ☀☁★☆☐☑☜☝☞☟⛃⛶✔ ↺↻⟲⟳⬅➡⬆⬇⬈⬉⬊⬋⬌⬍⮨⮩⮪⮫ ♡ 📅📆 📈📉📊 📋📌📎📤📥🔆 🔈🔉🔊🔍🔎🔗🔘 🕓🖧🖩🖮🖱🖴🖵🖼🗀🗁🗋🗐🗑🗙🚫❓"],["style","egui theme (spacing, colors, etc)."],["text",""],["util","Miscellaneous tools used by the rest of egui."],["widget_text",""],["widgets","Widgets are pieces of GUI such as [`Label`], [`Button`], [`Slider`] etc."]],"struct":[["Align2","Two-dimension alignment, e.g. [`Align2::LEFT_TOP`]."],["ClippedPrimitive","A [`Mesh`] or [`PaintCallback`] within a clip rectangle."],["Color32","This format is used for space-efficient color representation (32 bits)."],["ColorImage","A 2D RGBA color image in RAM."],["Context","Your handle to egui."],["DroppedFile","A file dropped into egui."],["FontData","A `.ttf` or `.otf` file and a font face index."],["FontDefinitions","Describes the font data and the sizes to use."],["FontId","How to select a sized font."],["FontImage","A single-channel image designed for the font texture."],["FontTweak","Extra scale and vertical tweak to apply to all text of a certain font."],["FullOutput","What egui emits each frame from [`crate::Context::run`]."],["Galley","Text that has been laid out, ready for painting."],["Grid","A simple grid layout."],["HoveredFile","A file about to be dropped into egui."],["Id","egui tracks widgets frame-to-frame using [`Id`]s."],["InnerResponse","Returned when we wrap some ui-code and want to return both the results of the inner function and the ui as a whole, e.g.:"],["InputState","Input state that egui updates each frame."],["KeyboardShortcut","A keyboard shortcut, e.g. `Ctrl+Alt+W`."],["Layout","The layout of a [`Ui`][`crate::Ui`], e.g. “vertical & centered”."],["Memory","The data that egui persists between frames."],["Mesh","Textured triangles in two dimensions."],["ModifierNames","Names of different modifier keys."],["Modifiers","State of the modifier keys. These must be fed to egui."],["MultiTouchInfo","All you probably need to know about a multi-touch gesture."],["Options","Some global options that you can read and write."],["PaintCallback","If you want to paint some 3D shapes inside an egui region, you can use this."],["PaintCallbackInfo","Information passed along with [`PaintCallback`] ([`Shape::Callback`])."],["Painter","Helper to paint shapes and text to a specific region on a specific layer."],["PlatformOutput","The non-rendering part of what egui emits each frame."],["PointerState","Mouse or touch state."],["Pos2","A position on screen."],["RawInput","What the integrations provides to egui at the start of each frame."],["Rect","A rectangular region of space."],["Response","The result of adding a widget to a [`Ui`]."],["Rgba","0-1 linear space `RGBA` color with premultiplied alpha."],["Rounding","How rounded the corners of things should be"],["Sense","What sort of interaction is a widget sensitive to?"],["Stroke","Describes the width and color of a line."],["TextFormat",""],["TextureHandle","Used to paint images."],["TextureOptions","How the texture texels are filtered."],["TexturesDelta","What has been allocated and freed during the last period."],["TouchDeviceId","this is a `u64` as values of this kind can always be obtained by hashing"],["TouchId","Unique identification of a touch occurrence (finger or pen or …). A Touch ID is valid until the finger is lifted. A new ID is used for the next touch."],["Ui","This is what you use to place widgets."],["Vec2","A vector has a direction and length. A [`Vec2`] is often used to represent a size."],["WidgetInfo","Describes a widget such as a [`crate::Button`] or a [`crate::TextEdit`]."]],"trait":[["NumExt","Extends `f32`, [`Vec2`] etc with `at_least` and `at_most` as aliases for `max` and `min`."]],"type":[["IdMap","`IdMap<V>` is a `HashMap<Id, V>` optimized by knowing that [`Id`] has good entropy, and doesn’t need more hashing."]]};