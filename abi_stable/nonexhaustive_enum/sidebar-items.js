window.SIDEBAR_ITEMS = {"fn":[["assert_correct_default_storage","Asserts that the size and alignment of an enum are valid for its default storage."],["assert_correct_storage","Asserts that the size and alignment of an enum aree valid for this storage."]],"struct":[["AssertCsArgs","Arguments for [`assert_correct_storage`]"],["EnumInfo","Contains miscelaneous information about an enum."],["NonExhaustive","A generic type for all ffi-safe non-exhaustive enums."],["UnwrapEnumError","An error for a situation where a `NonExhaustive<>` could not be unwrapped into the enum because the discriminant wasn’t valid in this context (likely because it is from a newer version of the library)."]],"trait":[["DeserializeEnum","Describes how a nonexhaustive enum is deserialized."],["GetEnumInfo","Describes the discriminant of an enum,and its valid values."],["GetVTable","Gets the vtable of `NonExhaustive<Self,S,I>`."],["NonExhaustiveMarker","Queries the marker type which describes the layout of this enum, for use in `NonExhaustive`’s `StableAbi` impl."],["NonExhaustiveSharedOps","Used to abstract over the reference-ness of [`NonExhaustive`] inside [`UnwrapEnumError`]."],["SerializeEnum","Describes how some enum is serialized."],["ValidDiscriminant","Marker trait for types that abi_stable supports as enum discriminants."]],"type":[["NonExhaustiveFor","The type of a `NonExhaustive` wrapping the enum `E`, using `E`’s  default storage and interface."],["NonExhaustiveWI","The type of a `NonExhaustive<>` wrapping the enum E, using the `E`’s  default storage and a custom interface."],["NonExhaustiveWS","The type of a `NonExhaustive<>` wrapping the enum E, using a custom storage and the `E`’s default interface."]]};