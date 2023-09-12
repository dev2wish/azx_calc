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
