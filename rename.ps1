$sourceDirectory = "./src"

# Get all files in the source directory and its subdirectories
$files = Get-ChildItem -Path $sourceDirectory -Recurse -File

foreach ($file in $files) {
  # Replace ".ts" with ".ts" in the file name
  $newFileName = $file.Name -replace "\.d\.ts$", ".ts"

  # Construct the new file path
  $newFilePath = Join-Path -Path $file.DirectoryName -ChildPath $newFileName

  # Rename the file
  Rename-Item -Path $file.FullName -NewName $newFileName
}