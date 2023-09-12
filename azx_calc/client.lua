-- Copyright © 2023 az0ox. All rights reserved.

RegisterCommand('calc', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        display = true,
        type = "calc"
    })
end, false)

RegisterNUICallback('closeCalc', function()
    SetNuiFocus(false, false)
end)
